import "./App.css";

const App = ()=>{
    return (<div>
        <header className="jumbotron">
            <h1>Kimula BakuGundo's Todo List</h1>
        </header>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Something clever.." />
            <div class="input-group-append">
                <button class="btn btn-primary" type="button">OK</button>
                <button class="btn btn-danger" type="button">Cancel</button>
            </div>
        </div>
        <div>
            <table class="table table-hover">
                <thead>
                    <tr style={{textAlign:"center"}}>
                        <th>Confirm</th>
                        <th>Titme</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>상훈,한과 미니 프로젝트 만들기</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>한상훈과 조별 스터디 자료 준비</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>바쿠건도 홈페이지 만들기</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>);
};

export default App;