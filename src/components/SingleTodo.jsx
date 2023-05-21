export default function SingleTodo({ 
    item, 
    changeStatusInSingleTodo
 }) 
{

    const changeStatus = () => {
        if(item.status !== "trash") {
            if(item.status === "done") {
            changeStatusInSingleTodo(item.id, "todo")
        }
         else{   changeStatusInSingleTodo(item.id, "done")
        }
        }      
    }

    return (
        <div>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <input 
                    type="checkbox" 
                    checked={item.status === 'done'}
                    onChange={changeStatus}
                />
                <p 
                    style={{textDecoration: item.status === 'done' ? "line-through" : "none"}}
                    >
                        {" "}
                        {item.name}</p> 
            </div>
            {
                item.status !== "trash" ? (
                <button onClick={() => changeStatusInSingleTodo(item.id, "trash")}>
                Move to Trash
            </button>
                  )  : (
            <div>
                <button>Delete Forever</button>          
                <button>Move to Todo</button>
            </div>
            )}
        </div>      
    )
    }
