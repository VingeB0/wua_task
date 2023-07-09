import React, { useMemo } from "react";
import { useEvents } from "../../services";
import { EventList } from "./EventList";
import { Form } from "./Form";

export const EventTab = () => {
  const [maxEvents, setMaxEvents] = React.useState<number>(4);
  const { data, isLoading, isError } = useEvents();

  const slicedData = useMemo(() => data.slice(0, maxEvents), [data, maxEvents]);
  console.log("slicedData", slicedData);

  if (isLoading) {
    return <p className="p-5">Відбувається завантаження...</p>;
  }

  if (isError) {
    return <p className="p-5">Помилка при отриманні даних</p>;
  }

  if (!data || !slicedData.length) {
    return <p className="p-5">Немає даних</p>;
  }

  return (
    <div className="flex flex-col border border-gray border-solid">
      <EventList list={slicedData} />
      <Form increaseEvents={setMaxEvents} />
    </div>
  );
};
