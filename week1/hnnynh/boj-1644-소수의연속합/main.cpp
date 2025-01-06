#include <iostream>
#include <vector>
#include <cmath>

using namespace std;


int main() {

    int N, answer = 0;
    cin >> N;
    vector<int> prime;
    
    for(int i=2; i<=N; i++){
        bool isPrime = true;
        for(int j=2; j<=sqrt(i); j++){
            if(i % j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            prime.push_back(i);
        }
    }

    for(int i=prime.size()-1; i>=0; i--){
        int sum = 0;
        for(int j=i; j>=0; j--){
            sum += prime[j];
            if(sum == N){
                answer++;
                break;
            }
            else if(sum > N){
                break;
            }
        }
    }

    cout << answer;
    
    return 0;
}