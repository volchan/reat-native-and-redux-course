import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length > 0 ? (
        <ScrollView>
          <ResultsList results={filterResultsByPrice("€€")} title="Cost Effective" />
          <ResultsList results={filterResultsByPrice("€€€")} title="Bit Pricier" />
          <ResultsList results={filterResultsByPrice("€€€€")} title="Big Spender" />
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
