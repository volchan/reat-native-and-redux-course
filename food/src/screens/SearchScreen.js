import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length > 0 ? (
        <View>
          <Text>We have found {results.length} results.</Text>
          <ResultsList title="Cost Effective" />
          <ResultsList title="Bit Pricier" />
          <ResultsList title="Big Spender" />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
