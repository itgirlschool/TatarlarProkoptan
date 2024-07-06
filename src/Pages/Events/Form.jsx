export const Form = (options, handleTitle, isSelected) => {
    return isSelected ? (
        <form>
            <div>{options.label}</div>
            <div className="openForm">
                <p>{options.text}</p>
                <button>Записаться</button>
            </div>

        </form>
    )  : (
        <form>
            <div onClick={handleTitle}>{options.label}</div>
        </form>
    )
}
