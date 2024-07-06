const Form = (options, handleTitle, isSelected) => {
    function handleClick () {
        handleTitle();
    }
    return isSelected ? (
        <form>
            <div>{options.title}</div>
            <div className="openForm">
                <p>{options.lable}</p>
                <button>Записаться</button>
            </div>
        </form>
    )  : (
        <form>
            <div onClick={handleClick}>{options.title}</div>
        </form>
    )
}

export default Form;