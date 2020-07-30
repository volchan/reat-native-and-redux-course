import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length > 0 ? (
        <Text>We have found {results.length} results.</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
