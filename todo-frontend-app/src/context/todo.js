import React, { createContext, useEffect, useState } from "react";

const TodosContext = createContext({
    memberFirstName: "",
});
TodosContext.displayName = "Todos";

function TodosProvider({ children }) {
    const [memberFirstName, setMemberFirstName] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setMemberFirstName("Manu");
            alert(memberFirstName);
        }, 1000);
    });
    const context = { memberFirstName };

    return <TodosContext.Provider value={context}>{children}</TodosContext.Provider>;
}

export { TodosContext, TodosProvider };