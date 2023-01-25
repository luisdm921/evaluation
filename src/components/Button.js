function Button({handleAdd, index, handleDelete}){

function add(){
     handleAdd(index + 1)
}

function deleteinput(){
    handleDelete(index)
}

    return(<div>
     <button onClick={add}>+</button>
     <button onClick={deleteinput}>-</button>
    </div>)
}

export default Button;