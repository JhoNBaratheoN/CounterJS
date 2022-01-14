const container = document.querySelector('#app');

// const app = React.createElement("h2", null, "Contador com React");

function app(props) {

    //const Ttle = React.createElement("h2", null, props.title)
    //const Counter = React.createElement("h3", null, 0)

    //React.createElement("div", { className: props.className},)

    //return React.createElement("h2", null, props.title);

    const [contagem, setContagem] = React.useState(0);


    function increment() {
        setContagem(anterior=> anterior + 1);
    }

    function decrement() {
        setContagem(anterior=> anterior - 1);
    }

    return (<div className="Contador">
                <h2>{props.title}</h2>
                    <h3>{contagem}</h3>
                    <div>
                        <button onClick={decrement}>-</button>
                        <button onClick={increment}>+</button>
                    </div>
            </div>)
}

// ReactDOM.render(app({ title: "Contador com React" }), container);

ReactDOM.render(
    React.createElement(app, { title: "Contador com React" }, null), container)
