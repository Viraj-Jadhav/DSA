#include <iostream>
using namespace std;
int missingelement(int P[])
{
    int i, diff, l;
    l = P[0];
    diff = l - 0;

    for (i = 0; i < 7; i++)
    {
        if (P[i] - i != diff)
        {
            cout << i + diff;
            break;
        }
    }

    return 0;
}
int main()
{
    int A[7] = {6, 7, 8, 9, 11, 12, 13};
    missingelement(A);
}