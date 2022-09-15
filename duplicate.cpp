#include <iostream>
using namespace std;
int main()
{
    int A[6] = {2, 4, 7, 5, 7, 3};
    int H[8] = {0};
    int i;
    for (i = 0; i < 6; i++)
    {
        H[A[i]]++;
    }
    for (i = 0; i < 8; i++)
    {
        if (H[i] > 1)
            cout << "element"
                 << " " << i << "comes" << H[i] << "times" << endl;
    }
    return 0;
}