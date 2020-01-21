import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
<<<<<<< HEAD

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
=======
import $ from 'jquery';




function query(){
	console.log("ok");

		$.ajax({
			url: 'get.php',
			method: 'post',
			dataType: 'html',
			data: {
				server: "http://coolercontroller.000webhostapp.com/requestUnity.php"
			},
			success: function(data){
				 $("#block").text(data);
			}
		});
	}

const Home = ({ id, go, fetchedUser }) => (

	

	<Panel id={id}>
		<PanelHeader>Cooler</PanelHeader>
		{fetchedUser &&
		<Group title="Смотри, это ты)">
>>>>>>> first commit
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

<<<<<<< HEAD
		<Group title="Cooler">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					button
				</Button>
			</Div>
		</Group
		<Group>
      			<Div>
        			text
      			</Div>
=======

		
		<Group title="Тыкай, куда душа пожелает">
     		
     		<Div style={{display: 'flex'}}>
       			<Button size="l" stretched style={{ marginRight: 8 }} onClick={go} data-to="persik">Котя</Button>
       			<Button size="l" stretched level="commerce" onClick={go} data-to="floor1">Демка</Button>
     		</Div>
     	</Group>
     	<Group>
      		
		<Button size="l"  style={{ marginRight: 8 }} onClick={query} >button</Button>
		<input type="button" onClick="query();"></input>
   		</Group>
     	<Group>
      		<Div id = "block"></Div>
>>>>>>> first commit
   		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
