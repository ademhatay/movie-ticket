import React, { useContext, createContext, useState, useEffect } from 'react';

const Context = createContext();

// Create a provider
const Provider = ({ children }) => {

	const [showModal, setShowModal] = useState(false);

	const data = {
		showModal,
		setShowModal,
	};

	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useGeneralContext = () => {
	const context = useContext(Context);

	if (!context) {
		throw new Error('useGeneralContext must be used within a Provider');
	}

	return context;
};

export default Provider;