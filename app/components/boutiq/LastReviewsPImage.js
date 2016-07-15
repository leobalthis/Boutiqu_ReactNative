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
		  <PImage type='circle' size={40}/>
		  <PImage type='circle' size={40}/>
		  <PImage type='circle' size={40}/>
		</View>
	);
}

const styles = StyleSheet.create({

});
