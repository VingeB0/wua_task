import {useQueryClient} from "@tanstack/react-query";
import {QUERY_KEYS} from "../../query";
import {EventItemProps} from "../../../tabs/events/EventItem";
import {Event} from "../../../api/types";

export const useEventsCache = () => {
    const queryClient = useQueryClient();

    const handleAddEvent = (newData: EventItemProps) => {
        queryClient.setQueryData([QUERY_KEYS.EVENTS], (prevData: (EventItemProps | Event)[] = []) => {
            return [newData, ...prevData];
        });
    }

    return {
        handleAddEvent,
    }
}