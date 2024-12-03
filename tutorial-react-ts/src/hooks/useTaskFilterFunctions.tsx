import { useState } from "react";
import { FILTER_TASK_MAP, FilterTaskKey, TaskFilterPros as TaskFilterProps } from "../types/taskFilterProps";

function useTaskFilterFunctions(): TaskFilterProps {
    const [filter, setFilter] = useState<FilterTaskKey>('All')

    const FILTER_NAMES = Object.keys(FILTER_TASK_MAP) as FilterTaskKey[]

    return {
        filter,
        FILTER_NAMES,
        setFilter
    }
}

export default useTaskFilterFunctions