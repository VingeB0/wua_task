import React, { useCallback } from "react";
import { CheckedCircleRadio, CircleRadio } from "../assets/icons";

export enum ACTION_FILTERS {
  ALL = "all",
  COMMENTS = "comments",
}

export const actionFilterToText = {
  [ACTION_FILTERS.ALL]: "Всі",
  [ACTION_FILTERS.COMMENTS]: "Коментарі",
};

type EventFilterProps = {
  setOption: (value: ACTION_FILTERS) => void;
  option: ACTION_FILTERS;
};

const EventFilter = ({ setOption, option }: EventFilterProps) => {
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    },
    [],
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value as ACTION_FILTERS);
  };

  return (
    <div className="px-5 py-3 min-w-270 text-left">
      <h3 className="mb-2 font-bold text-15 text-darkestGray">Фільтри подій</h3>
      <form
        className="flex flex-col gap-2 text-17"
        action="/"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="flex items-center cursor-pointer hover:opacity-70">
            <input
              className="hidden"
              type="radio"
              name="event-filter"
              value={ACTION_FILTERS.ALL}
              checked={option === ACTION_FILTERS.ALL}
              onChange={handleOptionChange}
            />
            <div className={`w-4 h-4 mr-2`}>
              {option === ACTION_FILTERS.ALL ? (
                <CheckedCircleRadio />
              ) : (
                <CircleRadio />
              )}
            </div>
            {actionFilterToText[ACTION_FILTERS.ALL]}
          </label>
        </div>

        <div>
          <label className="flex items-center cursor-pointer hover:opacity-70">
            <input
              className="hidden"
              type="radio"
              name="event-filter"
              value={ACTION_FILTERS.COMMENTS}
              checked={option === ACTION_FILTERS.COMMENTS}
              onChange={handleOptionChange}
            />
            <div className={`w-4 h-4 mr-2`}>
              {option === ACTION_FILTERS.COMMENTS ? (
                <CheckedCircleRadio />
              ) : (
                <CircleRadio />
              )}
            </div>
            {actionFilterToText[ACTION_FILTERS.COMMENTS]}
          </label>
        </div>
      </form>
    </div>
  );
};

export default EventFilter;
