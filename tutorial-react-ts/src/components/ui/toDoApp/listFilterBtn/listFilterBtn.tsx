import { useContext } from "react"
import { FILTER_TASK_MAP, FilterTaskKey } from "../../../../types/taskFilterProps"
import FilterBtn from "../filterbtn/filterbtn"
import TaskContext from "../../../context/taskContext"

function ListFilterBtn() {
    const { filter, setFilter } = useContext(TaskContext)
    const FILTER_NAMES = Object.keys(FILTER_TASK_MAP) as FilterTaskKey[]

    return (
        <>
            {FILTER_NAMES.map((name) => (
                <FilterBtn
                    key={name}
                    filter={{
                        key: name,
                        name: name
                    }}
                    isPressed={filter === name}
                    setFilter={setFilter}
                />
            )
            )}
        </>

    )
}

export default ListFilterBtn