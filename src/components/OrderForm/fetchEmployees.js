export default function fetchEmployees({ onSuccess }) {
  fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then((res) => {
      if (res.status < 200 || res.status >= 300) {
        throw res;
      }
      onSuccess(res.data);
    })
    .catch(() => {
      // too often server will return 429 | too many requests
      // eslint-disable-next-line no-console
      console.error('fetching employee list failed, fallback to local data...');
      return import('../../mockData/employees');
    })
    .then((module) => {
      onSuccess(module.default.data);
    })
    .catch(() => {
      // TODO catch error here
    });
}
