class CV {
  constructor(props) {
    this.name = props.name;
    this.old = props.old;
  }

  get query() {
    return this.createQuery();
  }

  createQuery() {
    return `/download/${this.name}/${this.old}`;
  }
}

const redirect = () => {
  const url = new CV({
    name: document.querySelector('.name').value,
    old: document.querySelector('.age').value
  }).query;
  console.log(url);

  window.location.assign(url);
}
