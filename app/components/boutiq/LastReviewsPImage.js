import React, { Component } from 'react';

import { PImage } from './PImage';

import {
	StyleSheet,
	View,
	Image,
} from 'react-native';

export const LastReviewsPImage = () => {
	return (
		<View>
		  <PImage type='circle' size={40} border={false}/>
		  <PImage type='circle' size={40} border={false}/>
		  <PImage type='circle' size={40} border={false}/>
		</View>
	);
}

const styles = StyleSheet.create({

});
