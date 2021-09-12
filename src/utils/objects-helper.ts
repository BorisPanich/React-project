import {userType} from '../redux/users-reducer';

export const updateObjectInArray = (items: Array<userType>, itemId: number, objPropName: string, newObjProps: any) => {
	return items.map(item => {
		// @ts-ignore
		if (item[objPropName] === itemId) {
			return {...item, ...newObjProps}
		}
		return item
	})
}