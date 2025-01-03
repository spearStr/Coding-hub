#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

int main() {

    int N, min1 = 1000000000, min2 = 1000000001;
    cin >> N;
    vector<int> sol(N, 0);
    
    for(int i=0; i<N; i++){
        cin >> sol[i];
    }
    
    sort(sol.begin(), sol.end());
    
    int start = 0, end = N-1;
    
    while(start < end){
        if (abs(sol[start]+sol[end]) < abs(min1+min2)){
            min1 = sol[start];
            min2 = sol[end];
        }
        
        if(sol[start]+sol[end] < 0)
            start++;
        else
            end--;
    }
    
    cout << min1 << " " << min2;
    
    return 0;
}