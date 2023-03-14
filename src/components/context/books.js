import { createContext, useState } from "react";

const BooksContext = createContext();

const Provider = ({ children }) => {
	const [count, setCount] = useState(5);

	const valueSharede = {
		count: count,
		incrimentCount: () => {
			setCount(count + 1);
		},
	};
	return (
		<BooksContext.Provider value={valueSharede}>
			{children}
		</BooksContext.Provider>
	);
};
export { Provider };
export default BooksContext;
