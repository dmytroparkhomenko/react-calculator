import { Component } from 'react'
import Header from '../header/header'
import './App.scss'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 0, 
            previous: 0, 
            operator: '', 
        }
    }

    typeNum = (e) => {
        this.setState({current: this.state.current !== 0 && this.state.current !== "0" ? Number(this.state.current + e.target.innerText) : Number(e.target.innerText)})
    } 

    addDot = () => this.setState({current: this.state.current + '.'})

    clear = () => {
        this.setState({
            current: 0, 
            previous: 0, 
            operator: null
        })
    }

    delete = () => String(this.state.current).length > 1 ? this.setState({current: String(this.state.current).slice(0, -1)}) : this.setState({current: 0})

    multiply = () => {
        this.setState({
            previous: Number(this.state.current), 
            current: 0, 
            operator: "x"
        })
    }

    divide = () => {
        this.setState({
            previous: Number(this.state.current), 
            current: 0, 
            operator: "/"
        })
    }

    minus = () => {
        this.setState({
            previous: Number(this.state.current),
            current: 0, 
            operator: "-"
        })
    }

    plus = () => {
        this.setState({
            previous: Number(this.state.current),
            current: 0, 
            operator: "+"
        })
    }

    count = (a, b, operator) => {
        switch(operator) {
            case "x": 
                return a * b
            case "-": 
                return b - a
            case "+": 
                return a + b
            case "/": 
                return b / a
            default: 
                return 'Error'
        }
    }

    result = () => {
        if (this.state.current === 0 || 
            this.state.previous === 0) return 
        
        this.setState({
            current: this.count(Number(this.state.current), Number(this.state.previous), this.state.operator), 
            previous: `(${this.state.previous} ${this.state.operator} ${this.state.current})`,
        })
    }

    render() {
        return (
            <>
                <Header/> 
                <div className="calculator-grid">
                    <div className="output">
                        <div className={String(this.state.previous).length > 15 ? "previous-operand sm-previous-digit" : "previous-operand"}>
                                {this.state.previous}
                        </div>
                        <div className={String(this.state.current).length > 15 ? "current-operand sm-current-digit" : "current-operand"}>
                                {this.state.current}
                        </div>
                    </div>
        
                    <button onClick={this.clear} className="span-two">AC</button>
                    <button onClick={this.delete}>DEL</button>
                    <button onClick={this.divide}>÷</button>
        
                    <button onClick={this.typeNum}>7</button>
                    <button onClick={this.typeNum}>8</button>
                    <button onClick={this.typeNum}>9</button>
                    <button onClick={this.multiply}>×</button>
                    
                    <button onClick={this.typeNum}>4</button>
                    <button onClick={this.typeNum}>5</button>
                    <button onClick={this.typeNum}>6</button>
                    <button onClick={this.plus}>+</button>
                    
                    <button onClick={this.typeNum}>1</button>
                    <button onClick={this.typeNum}>2</button>
                    <button onClick={this.typeNum}>3</button>
                    <button onClick={this.minus}>-</button>
        
                    <button onClick={this.addDot}>.</button>
                    <button onClick={this.typeNum}>0</button>
                    <button onClick={this.result} className='span-two'>=</button>
                </div>
            </>
       )
    }
}

export default App 