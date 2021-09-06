/*
// const container = document.getElementById('react-container');
// ReactDOM.render("Hello! Welcome to React", container);
const Container = () => {
    return React.createElement(`div`,null,`Hello ProGrads! Welcome to React Learning`,React.createElement(`div`,null,`Let's rock and roll`)
    );
}
//Render the Container
const container = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container),container);
*/
//using class component
class ReactContainer extends React.Component{
    //constructor - to initialize the state

    //render method to render react dom
    render(){
        // return React.createElement(`div`,null,`Hey ProGrads`,
        // React.createElement(`div`,null,`Let's rock and roll`));
        //JSX tags - parent element -- return
        return(
            <div>
                <p>Hello! Welcome to ProGrads</p>
                <div>Let's rock and roll</div>
            </div>
        )

    };
}
const container = document.getElementById('react-container');
//Directly pass the component to render
ReactDOM.render(<ReactContainer/>,container);