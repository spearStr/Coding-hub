#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

bool cmp(vector<string> a, vector<string> b){
    if(a[1] == b[1]){
        if(a[2] == b[2]){
            if(a[3] == b[3]){
                return a < b;
            }
            return stoi(a[3]) > stoi(b[3]);
        }
        return stoi(a[2]) < stoi(b[2]);
    }
    else
        return stoi(a[1]) > stoi(b[1]);
}

int main() {

    int N;
    cin >> N;
    vector<vector<string>> st;
    for(int i=0; i<N; i++){
        vector<string> temp(4, "");
        string name, kor, eng, math;
        for(int i=0; i<4; i++){
            cin >> temp[i];
        }
        st.push_back(temp);
    }
    
    sort(st.begin(), st.end(), cmp);
    
    for(int i=0; i<N; i++){
        cout << st[i][0] << '\n';
    }
    
    return 0;
}