import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";

const Favorites: React.FC = () => {
 

  return (
    <View style={styles.container}>
    <PageHeader title="Favoritos" />
    </View>
  );
};

export default Favorites;
