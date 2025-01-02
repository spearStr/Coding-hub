#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

vector<int> solution(string s) {
    vector<int> answer;
    int count = 0, zero = 0, cal, ix = 0;
    string x;
    while(true){
        count++;
        x = "";
        
        for(auto c:s){
            if(c == '0'){
                zero++;
                continue;
            }
            x += c;
        }
        
        ix = x.size();
        x = "";
        
        while(ix > 0){
            char temp = (ix % 2) + '0';
            x += temp;
            ix /= 2;
        }
        
        if(x.size() == 1)
            break;
        
        s = "";
        for(int i=x.size()-1; i>=0; i--){
            s += x[i];
        }
    }
    
    answer.push_back(count);
    answer.push_back(zero);
    
    return answer;
}