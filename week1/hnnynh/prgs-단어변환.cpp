#include <string>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

vector<bool> visited(51, false);
int answer = 50;

bool check(string s1, string s2){
    int cnt = 0;
    for(int i=0; i<s1.size(); i++){
        if(s1[i] != s2[i])
            cnt++;
    }
    
    if(cnt == 1)
        return true;
    return false;
}

void dfs(string begin, string target, vector<string> words, int count){
    if(begin == target){
        answer = count;
        return;
    }
    if(count >= answer)
        return;

    for(int i=0; i<words.size(); i++){
        if(!visited[i] && check(begin, words[i])){
            visited[i] = true;
            dfs(words[i], target, words, count+1);
            visited[i] = false;
        }
    }
}

int solution(string begin, string target, vector<string> words) {
    
    if(find(words.begin(), words.end(), target) == words.end())
        return 0;
    
    dfs(begin, target, words, 0);
    
    return answer;
}