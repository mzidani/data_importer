import { Page } from '@shopify/polaris';

function handleSubmit(event) {

}

const Index = () => (
  <Page>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <div class="container">
        <form onSubmit={this.handleSubmit}>
          <label for="formFileLg" class="form-label">Large file input example</label>
          <input class="form-control form-control-lg" id="formFileLg" type="file" accept=".xlsx, .xls, .csv" required/>
        </form>
      </div>
  </Page>
);

export default Index;
