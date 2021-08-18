import HomeScreen from '@screens/home/Home'
import { FC } from 'react'

interface screen {
    path: string;
    exact: boolean;
    Component: FC;
}

const screens: screen[] = [{
    path: '/',
    Component: HomeScreen,
    exact: false    
}]

export default screens