import React, { Component } from 'react';

import { ProfilePhoto } from './ProfilePhoto';

import {
	StyleSheet,
	View,
	Image,
} from 'react-native';

export const LastReviewsProfilePhoto = () => {
	return (
		<View>
		  <ProfilePhoto type='circle' size={40} border={false}/>
		  <ProfilePhoto type='circle' size={40} border={false}/>
		  <ProfilePhoto type='circle' size={40} border={false}/>
		</View>
	);
}

const styles = StyleSheet.create({

});
