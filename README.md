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
