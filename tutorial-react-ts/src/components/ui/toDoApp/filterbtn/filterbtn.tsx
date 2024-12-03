import { FilterButtonProps, FilterTaskKey } from "../../../../types/taskFilterProps"

function FilterBtn(props: FilterButtonProps) {

    return (
        <button
            type="button"
            aria-pressed='true'
            onClick={() => props.setFilter(props.filter.name as FilterTaskKey)}
        >
            {props.filter.name}
        </button>
    )
}

export default FilterBtn