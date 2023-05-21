import React from 'react';
import { View, Modal, Text, Button } from 'react-native';

interface ModalProps {
	visible: boolean;
	onClose: () => void;
	item?: any;
}

const AppModal: React.FC<ModalProps> = ({ visible, onClose, item }) => {
	return (
		<Modal visible={visible} animationType="fade" transparent={true}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
				<View style={{ backgroundColor: 'white', padding: 20, borderRadius: 14 }}>
					<Text>{
						JSON.stringify(item, null, 2)
					}
					</Text>
					<Button title="Close" onPress={onClose} />
				</View>
			</View>
		</Modal>
	);
};

export default AppModal;
