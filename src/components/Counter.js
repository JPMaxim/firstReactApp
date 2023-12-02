export function Counter({count, countIncrement, countDecrement}) {
    return (
        <div className="countContainer">
            <button className="countButton" onClick={countDecrement}>
                &#8722;
            </button>
            <h1 className="count">
                {count}
            </h1>
            <button className="countButton" onClick={countIncrement}>
                <p>+</p>
            </button>
        </div>

    )
}