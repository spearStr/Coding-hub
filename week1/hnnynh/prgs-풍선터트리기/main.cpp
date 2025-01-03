#include <string>
#include <vector>

using namespace std;

int solution(vector<int> a) {
    if(a.size() <= 1)
        return 1;
    
    int answer = 2, temp = a[a.size()-1], len = a.size();
    int left = a[0];
    vector<int> right(len, 0);
    
    for(int i=0; i<len; i++){
        temp = temp < a[len-1-i] ? temp : a[len-1-i];
        right[len-1-i] = temp;
    }
    
    for(int i=1; i<len-1; i++){  
        if(left<a[i] && right[i]<a[i])
            continue;
        
        answer++;
        left = left < a[i] ? left : a[i];
    }
    
    return answer;
}