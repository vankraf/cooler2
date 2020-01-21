import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
<<<<<<< HEAD

import Home from './panels/Home';
import Persik from './panels/Persik';
=======
import $ from 'jquery';

import Home from './panels/Home';
import Persik from './panels/Persik';
import App_test from './panels/App_test';
import Floor1 from './panels/Floor1';
import Floor2 from './panels/Floor2';
import Floor3 from './panels/Floor3';
import Floor4 from './panels/Floor4';

>>>>>>> first commit

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
<<<<<<< HEAD
=======
			<App_test id='app_test' go={go} />
			<Floor1 id='floor1' go={go} />
			<Floor2 id='floor2' go={go} />
			<Floor3 id='floor3' go={go} />
			<Floor4 id='floor4' go={go} />
			
>>>>>>> first commit
		</View>
	);
}

export default App;

