#include <iostream>
#include <vector>
#include <queue>

using namespace std;

vector<vector<int>> paper;
int n, m, count = 0, ex = 0;
int dx[4] = {0, 0, 1, -1};
int dy[4] = {1, -1, 0, 0};

void bfs(){
    
    bool visited[501][501] = {false,};
    for(int i=0; i<n; i++){
        
        for(int j=0; j<m; j++){
            if(visited[i][j] || paper[i][j] == 0)
                continue;
            queue<pair<int, int>> q;
            int tempex = 0;
            count++;
            q.push({i, j});
            
            while(!q.empty()){
                int tx = q.front().first;
                int ty = q.front().second;
                q.pop();
                
                if(visited[tx][ty])
                    continue;
                
                visited[tx][ty] = true;
                tempex++;
                
                for(int k=0; k<4; k++){
                    int nx = tx + dx[k];
                    int ny = ty + dy[k];
                    
                    if(nx<0 || n<=nx || ny<0 || m<=ny)
                        continue;
                    
                    if(paper[nx][ny] == 1 && !visited[nx][ny])
                        q.push({nx, ny});
                }
            }
            
            ex = tempex < ex ? ex : tempex;
        }
    }
}

int main() {

    cin >> n >> m;
    
    for(int i=0; i<n; i++){
        vector<int> temp(m, 0);

        for(int j=0; j<m; j++){
            cin >> temp[j];
        }
        paper.push_back(temp);
    }
    
    bfs();
    
    cout << count << '\n' << ex;
    
    return 0;
}