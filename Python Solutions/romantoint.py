class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        default_values = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        total = 0
        next = 0
        for i in range(len(s)):
            next = i+1 
            try: 
                if default_values[s[next]] > default_values[s[i]]:
                    total += -1 * default_values[s[i]]
                else:
                    total += default_values[s[i]]
            except IndexError:
                total += default_values[s[-1]]

        return total
