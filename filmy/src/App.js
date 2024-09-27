import './App.css';

function App() {
  return (
    <div className="App">
      <form>
          <div class="mb-3">
            <label for="film" class="form-label">Tytuł Filmu</label>
            <input type="text" class="form-control" id="film"/>
          </div>
          <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
          <button type="submit" class="btn btn-primary">Zastosuj</button>
        </form>
    </div>
  
);
}

export default App;
