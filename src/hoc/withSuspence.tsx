import React from 'react';
import Loader from '../components/common/Loader/Loader';


export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
	return (props: WCP) => {
		return <React.Suspense fallback={<Loader/>} >
			<WrappedComponent {...props} />
		</React.Suspense>
	}
}