import * as React from 'react';
// import {useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';
import {View, Text} from 'react-native';
import GET_CITY from '../GraphQL/Querie';

function GetCity() {
  // const {data} = useQuery(GET_CITY, {
  //   // variables: filterQuery,
  //   notifyOnNetworkStatusChange: true,
  //   fetchPolicy: 'network-only',
  // });

  // useEffect(() => {
  // console.log(data, 999999999);
  // }, [data]);

  return (
    <View>
      <Text>dfsdsfdsfdsffd</Text>
    </View>
  );
}

export default GetCity;
