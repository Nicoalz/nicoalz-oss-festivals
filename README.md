# nicoalz-oss-festivals

A festivals information package.

## Installation

To install the package, you can use npm:

```shell
npm install nicoalz-oss-festivals
```

## Usage

- [x] Get festivals by department:
    - function: getFestivalsByDepartment(department)
    - parameter: department (string) - Use first two numbers of ZipCode. Ex: '01' for Ain
    - return: array of festivals, docs: https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/

- [x] Get festivals by month:
    - function: getFestivalsByMonth(month)
    - parameter: month (string) - Use two numbers for month. Ex: '01' for January
    - return: array of festivals, docs: https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/

- [x] Get festivals by region: 
    - function: getFestivalsByRegion(region)
    - parameter: region (string) - Use region name. Ex: 'Auvergne-Rhône-Alpes'
    - return: array of festivals, docs: https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/

- [x] Get festivals by domaine: 
    - function: getFestivalsByDomaine(domaine)
    - parameter: domaine (string) - Use domaine name. Ex: 'Musiques actuelles'
    - return: array of festivals, docs: https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/

- [x] Get festivals by fiters: 
    - function: getFestivalsByFilters(filters)
    - parameter: filters (object) - Use filters object. Ex: {region: 'Auvergne-Rhône-Alpes', domaine: 'Musiques actuelles'} :warning: Only a wrong value of a correct filter will throw an error
    - return: array of festivals, docs: https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/


## More documentation
- https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/
- https://help.opendatasoft.com/apis/ods-explore-v2/explore_v2.1.html

