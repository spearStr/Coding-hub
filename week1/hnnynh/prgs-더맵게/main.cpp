#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> scoville, int K) {
    priority_queue<int> pq;
    int ans = 0;
    
    for(auto s:scoville){
        pq.push(s*-1);
    }
    
    while(pq.size() > 1 && pq.top()*-1 < K){
        int l1 = pq.top();
        pq.pop();
        
        int l2 = pq.top();
        pq.pop();
        
        int p = l1 + l2 * 2;
        pq.push(p);
        
        ans++;
    }
    
    if(pq.size() == 1 && pq.top() * -1 < K)
        return -1;
    
    return ans;
}