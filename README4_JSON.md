
![image](https://github.com/slzlxn/react_basic/assets/105650300/92e1346a-e280-4689-9e3b-b172c2325936)
https://github.com/typicode/json-server https://www.npmjs.com/package/json-server
  npm i json-server

# db.json 파일 만들기
![image](https://github.com/slzlxn/react_basic/assets/105650300/f807a4cd-069a-42e9-b41d-94f2f4fad7be)

## *db.json파일은 root에 만들어야한다.
![image](https://github.com/slzlxn/react_basic/assets/105650300/d472902c-2e71-4add-8771-c2fd7c8aa510)


# db.json 실행하기
![image](https://github.com/slzlxn/react_basic/assets/105650300/6c268332-d769-403f-a03b-8b93079e00fb)

## 위와 같이 실행하면 port를 3000번을 사용하기 때문에 react와 중복이 되어버린다.
## 그래서 port를 변경해 주어야 한다.
    json-server --watch db.json --port 3004
