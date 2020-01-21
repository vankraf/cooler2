import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon20LikeOutline from '@vkontakte/icons/dist/20/like_outline';

import floor1 from '../img/floor1.svg';
import './App_test.css';


const osName = platform();

const Floor1 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			1 Этаж
		</PanelHeader>
		<Div style={{display: 'flex'}}>
            <Button size="l" stretched  style={{ marginRight: 8 }} >1</Button>
            <Button size="l" stretched  style={{ marginRight: 8 }} onClick={props.go} data-to="floor2">2</Button>
            <Button size="l" stretched  style={{ marginRight: 8 }} onClick={props.go} data-to="floor3">3</Button>
            <Button size="l" stretched  style={{ marginRight: 8 }} onClick={props.go} data-to="floor4">4</Button>
        </Div>
		<img className="Floor1" src={floor1} alt="Floor"/>
		<Div>
      
        <div style={{
          backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
          height: 70,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '25px',
          borderRadius: 12
        }}>
       
          <Button size="xl" stretched level="overlay_secondary" before={<Icon20LikeOutline/>} style={{ marginRight: 8,marginLeft: 8 }} >1</Button>
          <Button size="xl" stretched level="overlay_secondary" before={<Icon20LikeOutline/>} style={{ marginRight: 8, marginLeft: 8}} >2</Button>
            
 
        </div>
       
      </Div>
	</Panel>
);

Floor1.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Floor1;
