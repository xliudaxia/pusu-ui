import React, {
  KeyboardEvent,
  ChangeEvent,
  FC,
  ReactElement,
  useEffect,
  useState,
  useRef,
} from "react";
import Input from "../Input";
import Icon from "../Icon";
import { InputProps } from "../Input/input";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";
import classNames from "classnames";
import Transition from "../Transition/transition";

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    renderOption,
    value,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // 高亮
  const [highLightIndex, setHighLightIndex] = useState(-1);
  const componentRef = useRef<HTMLDivElement>(null);
  const triggerSearch = useRef(false);

  const debouncedValue = useDebounce(inputValue, 500);

  useClickOutside(componentRef, () => {
    setSuggestions([]);
  });

  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(debouncedValue);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setLoading(false);
          setSuggestions(data);
          if (data.length > 0) {
            setShowDropdown(true);
          }
        });
      } else {
        setSuggestions(results);
        if (results.length > 0) {
          setShowDropdown(true);
        }
      }
    } else {
      setShowDropdown(false);
      setSuggestions([]);
    }
    setHighLightIndex(-1);
  }, [debouncedValue, fetchSuggestions]);

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    // setSuggestions([]);
    setShowDropdown(false);
    // onSelect && onSelect(item);
    onSelect && onSelect(item);
    triggerSearch.current = false;
  };
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={5000}
        onExited={() => {
          setSuggestions([]);
        }}
      >
        <ul className="pusu-suggestion-list">
          {loading && (
            <div className="suggestions-loading-icon">
              <Icon icon="spinner" spin />
            </div>
          )}
          {suggestions.map((item, index) => {
            const cnames = classNames(`suggestion-item`, {
              "item-highlighted": index === highLightIndex,
            });
            return (
              <li
                key={index}
                className={cnames}
                onClick={() => handleSelect(item)}
              >
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      </Transition>
    );
  };

  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighLightIndex(index);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highLightIndex]) {
          handleSelect(suggestions[highLightIndex]);
        }
        break;
      case 38:
        highlight(highLightIndex - 1);
        break;
      case 40:
        highlight(highLightIndex + 1);
        break;
      case 27:
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };

  return (
    <div className="pusu-auto-complte" ref={componentRef}>
      <Input
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={handleChange}
        {...restProps}
      />

      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
