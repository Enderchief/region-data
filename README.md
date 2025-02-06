# Regions Canada

This package is parsed data from the
[Geographical Names Data by the Government of Canada](https://natural-resources.canada.ca/earth-sciences/geography/download-geographical-names-data/9245)
which contains the names of only populated places (i.e. Cities, Towns, etc.).

### Usage

```ts
import { getPlace, type Place } from "regions-canada";

const saskatchewan: Place = getPlace("saskatchewan").filter(
  (place) => place.term === "City",
);
console.log(saskatchewan);
/* Output:
[
  {
    name: 'Estevan',
    term: 'City',
    latitude: '49.1392833',
    longitude: '-102.9859847'
  },
  {
    name: 'Humboldt',
    term: 'City',
    latitude: '52.2019155',
    longitude: '-105.1229806'
  },
  {
    name: 'Lloydminster',
    term: 'City',
    latitude: '53.2779556',
    longitude: '-109.9802528'
  },
  {
    name: 'Martensville',
    term: 'City',
    latitude: '52.2919249',
    longitude: '-106.6524122'
  },
  {
    name: 'Meadow Lake',
    term: 'City',
    latitude: '54.1241055',
    longitude: '-108.4359051'
  },
  {
    name: 'Melfort',
    term: 'City',
    latitude: '52.8563361',
    longitude: '-104.6099722'
  },
  {
    name: 'Melville',
    term: 'City',
    latitude: '50.9304306',
    longitude: '-102.8078417'
  },
  {
    name: 'Moose Jaw',
    term: 'City',
    latitude: '50.3934194',
    longitude: '-105.5519522'
  },
  {
    name: 'North Battleford',
    term: 'City',
    latitude: '52.7574361',
    longitude: '-108.2861667'
  },
  {
    name: 'Prince Albert',
    term: 'City',
    latitude: '53.1995170',
    longitude: '-105.7600940'
  },
  {
    name: 'Regina',
    term: 'City',
    latitude: '50.4548389',
    longitude: '-104.6066083'
  },
  {
    name: 'Saskatoon',
    term: 'City',
    latitude: '52.1396500',
    longitude: '-106.6861833'
  },
  {
    name: 'Swift Current',
    term: 'City',
    latitude: '50.2881611',
    longitude: '-107.7938944'
  },
  {
    name: 'Warman',
    term: 'City',
    latitude: '52.3220721',
    longitude: '-106.5841825'
  },
  {
    name: 'Weyburn',
    term: 'City',
    latitude: '49.6609833',
    longitude: '-103.8526306'
  },
  {
    name: 'Yorkton',
    term: 'City',
    latitude: '51.2137750',
    longitude: '-102.4628806'
  }
]
*/
```

## Type

```ts
interface Place {
  name: string;
  term: string;
  latitude: string;
  longitude: string;
}
```

## License
This package is licensed under the MIT License.
The data is provided by the Government of Canada and is licensed under the [Open Government License - Canada](https://open.canada.ca/en/open-government-licence-canada).
```
